import { Fragment, useContext, useState, useEffect } from 'react'
import { GlobalContext } from '@/context/globalStateProvider'
import { NextPage } from 'next'
import endPoints from '@/constants/Endpoints'
import Show from '@/components/Show'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Constants from '@/constants/Constants'
import Link from 'next/link'
import { tokenABI } from '@/contracts/LFTABI'
import Loading from '@/components/Loading'
import useFetchRealtime from '@/hooks/useFetchRealtime'
import HTTPMethods from '@/constants/HTTPMethods'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import moment from 'moment'
import Web3 from 'web3'
import useFetch from '@/hooks/useFetch'
import contractAddress from '@/constants/Address'
import LFTSwapModal from '@/utils/LFTSwapModal'

const DashboardPage: NextPage = () => {
    const web3Provider = new Web3(endPoints.infuraEndpoint)
    const [{ userState }] = useContext(GlobalContext)
    const [etherBalance, setEther] = useState('0')
    const [lftBalance, setLft] = useState('0')
    const [walletLoading, setWalletLoading] = useState(true)
    const [accountAddress, setAccountAddress] = useState('')
    const router = useRouter()
    const [isSwapModalOpened, setSwapModalOpened] = useState(false)
    const transactions = useFetchRealtime('transactions', endPoints.getTransactionsEndpoint, HTTPMethods.POST)
    const datasetSubscriptions = useFetch('subscriptions', endPoints.datasetSubscriptionEndpoint, HTTPMethods.POST)

    useEffect(() => {
        (async () => {
            try {
                const { privateKey } = userState
                const { address: walletAddress } = web3Provider.eth.accounts.privateKeyToAccount(privateKey)
                setAccountAddress(walletAddress)
                const ethBalanceInWei = await web3Provider.eth.getBalance(walletAddress)
                const ethBalance = web3Provider.utils.fromWei(ethBalanceInWei, 'ether')
                setEther(ethBalance)
                const lftContract = new web3Provider.eth.Contract(tokenABI as any, contractAddress.tokenContractAddress)
                let lftBalance = '0'
                lftContract.methods.balanceOf(walletAddress).call((error: any, balance: any) => {
                    if (error) {
                        toast.error(Constants.ErrorMessage)
                    } else {
                        lftBalance = web3Provider.utils.fromWei(balance, 'ether')
                        setLft(lftBalance)
                    }
                })
                setWalletLoading(false)
            } catch (error) {
                setWalletLoading(false)
                toast.error(Constants.ErrorMessage)
            }
        })()
    }, [userState])

    const signOut = async () => {
        try {
            await axios.post(endPoints.signOutEndpoint)
            sessionStorage.removeItem('accessToken')
            router.push('/')
        } catch (error) {
            toast.error(Constants.ToastError)
        }
    }

    const transactionsToDisplay = transactions?.data?.transactions?.map((tx: any) => {
        return (
            <tr key={tx._id}>
                <td>{tx.transactionType} LFT</td>
                <td>{tx.lftAmount} LFT</td>
                <td>{tx.ethAmount} ETH</td>
                <td>{moment(tx.date).format('MMM, Do YYYY, h:mm a')}</td>
                <td><a href={`${endPoints.etherScanEndpoint}/${tx.txHash}`} target='_blank' rel='noopener noreferrer' className='link-table'>View on EtherScan</a></td>
            </tr>
        )
    })

    return (
        <Fragment>
            <Show when={!transactions.isLoading && !walletLoading}>
                <Container>
                    <Row className='mt-4'>
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} className='mb-2'>
                            <div className='jumbotron'>
                                <p className='branding'>Subscriptions <i className='fa-solid fa-circle-plus'></i></p>
                                <p className='display-6'>{datasetSubscriptions?.data?.subscribedDatasets?.length}</p>
                                <p className='lead'>NFT Count - {datasetSubscriptions?.data?.subscribedDatasets?.length}</p>
                                <Link href={'/subscriptions'} className='btn btn-bottom'>View Subscriptions <i className='fa-solid fa-circle-arrow-right'></i></Link>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} className='mb-2'>
                            <div className='jumbotron'>
                                <p className='branding'>Wallet <i className='fa-solid fa-wallet'></i></p>
                                <div>
                                    <p className='smalltext'>{accountAddress}</p>
                                    <h4>
                                        <i className='fa-brands fa-ethereum'></i>{Number(etherBalance).toFixed(2)} ETH
                                        <i className='fa-solid fa-certificate'></i>{Number(lftBalance).toFixed(0)} LFT
                                    </h4>
                                    <Link className='link-para' href={'https://sepoliafaucet.com/'} passHref target='_blank'>Get Some Test Ethers</Link>
                                </div>
                                <button className='btn btn-bottom' onClick={() => setSwapModalOpened(true)}>Swap LFT with ETH<i className='fa-solid fa-circle-arrow-right'></i></button><br />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} className='mb-2'>
                            <div className='jumbotron'>
                                <p className='branding'>Transactions <i className='fa-solid fa-sack-dollar'></i></p>
                                <p className='display-6'>{transactions?.data?.transactions?.length}</p>
                                <p className='smalltext'>Buy LFT - {transactions?.data?.transactions?.filter((transaction: any) => transaction.transactionType === 'Buy').length}</p>
                                <p className='smalltext'>Sell LFT - {transactions?.data?.transactions?.filter((transaction: any) => transaction.transactionType === 'Sell').length}</p>
                                <button className='btn btn-bottom' onClick={signOut}>Refresh<i className='fa-solid fa-circle-arrow-right'></i></button><br />
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} className='mb-2'>
                            <div className='jumbotron'>
                                <p className='branding'>Account <i className='fa-solid fa-address-card'></i></p>
                                <p className='branding'>{userState.name}</p>
                                <p className="smalltext">If you close the browser window you'll be automatically signed out, however if you want to destroy the access token, you can click on sign out explicitly.</p>
                                <button className='btn btn-bottom' onClick={signOut}>Sign Out<i className='fa-solid fa-circle-arrow-right'></i></button><br />
                            </div>
                        </Col>
                    </Row>

                </Container>
                <Container>
                    <Show when={transactions?.data?.transactions?.length > 0}>
                        <p className='lead text-center text-white mb-4'>Transactions</p>
                        <Table responsive hover variant='light'>
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>LFT Amount</th>
                                    <th>ETH Amount</th>
                                    <th>Transaction Time</th>
                                    <th>EtherScan Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactionsToDisplay}
                            </tbody>
                        </Table>
                    </Show>
                </Container>
                <LFTSwapModal isOpened={isSwapModalOpened} closeModal={() => setSwapModalOpened(false)} />
            </Show>
            <Show when={transactions.isLoading || walletLoading}>
                <Loading />
            </Show>
        </Fragment>
    )
}

export default DashboardPage