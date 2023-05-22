import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fragment } from 'react'
import Web3 from 'web3'
import Loading from '@/components/Loading'
import Show from '@/components/Show'
import axios from 'axios'
import { tokenABI } from '@/contracts/LFTABI'
import { lnftABI } from '@/contracts/LNFTABI'
import contractAddress from '@/constants/Address'
import endPoints from '@/constants/Endpoints'
import { toast } from 'react-hot-toast'
import DatasetCard from '@/components/DatasetCard'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Constants from '@/constants/Constants'
import useFetch from '@/hooks/useFetch'
import HTTPMethods from '@/constants/HTTPMethods'
import Error from '@/components/ErrorComp'
import Link from 'next/link'
declare const window: any
const web3 = new Web3(Web3.givenProvider)

const ViewDatasetPage: NextPage = () => {
    const router = useRouter()
    const { id: datasetId } = router.query
    const [eventId, setEventId] = useState(Math.random().toString())
    const [account, setAccount] = useState('')
    const [isTransactionProcessing, setTransactionProcessing] = useState(false)
    const dataset = useFetch('view dataset', endPoints.datasetViewEndpoint, HTTPMethods.POST, { datasetId })
    const similarDatasets = useFetch('similar datasets', endPoints.findsimilarDatasets, HTTPMethods.POST, { datasetId })
    const subscriptionStatus = useFetch('subscription status', endPoints.checkSubscriptionEndpoint, HTTPMethods.POST, { datasetId }, eventId)

    useEffect(() => {
        if (!datasetId) {
            router.push('/dataplatform')
        }

        const connectWallet = async () => {
            try {
                if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
                    try {
                        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                        setAccount(accounts[0])
                    } catch (err) {
                        toast.error(Constants.MetaMaskConnectionError)
                    }
                } else {
                    toast.error(Constants.MetamaskInstallNotification)
                }
            } catch (error) {
                toast.error(Constants.MetamaskInstallNotification)
            }
        }

        connectWallet()
    }, [])

    const subscribe = async () => {
        try {
            if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
                try {
                    setTransactionProcessing(true)
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                    setAccount(accounts[0])
                    const tokenId = Math.floor(1000000 + Math.random() * 9000000)

                    // Approve the contract to spend the tokens
                    const tokenContract = new web3.eth.Contract(tokenABI as any, contractAddress.tokenContractAddress)
                    await tokenContract.methods.approve(contractAddress.nftContractAddress, web3.utils.toWei(dataset?.data?.price.toString(), 'ether')).send({ from: account })

                    // Spend the tokens to buy a NFT
                    const nftcontract = new web3.eth.Contract(lnftABI as any, contractAddress.nftContractAddress)
                    await nftcontract.methods.mintNft(tokenId).send({ from: account, gas: 500000 })
                    await nftcontract.methods.purchaseNft(tokenId, web3.utils.toWei(dataset?.data?.price.toString(), 'ether')).send({ from: account, gas: 500000 })

                    await axios.post(`${endPoints.subscribeEndpoint}`, { datasetId, tokenId })
                    setEventId(Math.random().toString())
                    setTransactionProcessing(false)
                } catch (err) {
                    setTransactionProcessing(false)
                    toast.error(Constants.MetaMaskConnectionError)
                }
            } else {
                setTransactionProcessing(false)
                toast.error(Constants.MetamaskInstallNotification)
            }
        } catch (error) {
            setTransactionProcessing(false)
            toast.error(Constants.MetamaskInstallNotification)
        }
    }

    const unsubscribe = async () => {
        try {
            if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
                try {
                    setTransactionProcessing(true)
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                    setAccount(accounts[0])
                    const tokenId = subscriptionStatus?.data?.tokenId
                    const nftcontract = new web3.eth.Contract(lnftABI as any, contractAddress.nftContractAddress)
                    await nftcontract.methods.sellNft(tokenId).send({ from: account, gas: 500000 })
                    const refundAmount = (dataset?.data?.price / 2).toString()
                    const tokenContract = new web3.eth.Contract(tokenABI as any, contractAddress.tokenContractAddress)
                    await tokenContract.methods.mintCustomAmount(web3.utils.toWei(refundAmount, 'ether')).send({ from: account, gas: 500000 })
                    await axios.post(`${endPoints.unsubscribeEndpoint}`, { datasetId, tokenId })
                    setEventId(Math.random().toString())
                    setTransactionProcessing(false)
                } catch (err) {
                    setTransactionProcessing(false)
                    toast.error(Constants.MetaMaskConnectionError)
                }
            } else {
                setTransactionProcessing(false)
                toast.error(Constants.MetamaskInstallNotification)
            }
        } catch (error) {
            setTransactionProcessing(false)
            toast.error(Constants.MetamaskInstallNotification)
        }
    }

    const similarDatasetsToDisplay = similarDatasets?.data?.similarDatasets?.map((dataset: any) => {
        return <DatasetCard key={dataset._id} id={dataset._id} category={dataset.category} name={dataset?.name} price={dataset?.price} rating={dataset?.rating} />
    })

    const datasetTagsToDisplay = dataset?.data?.description?.split(' ').slice(0, 30).map((item: string) => {
        if (item.length > 4) {
            return <button className='btn tag-chip' title='tags' key={Math.random().toString()}>{item}</button>
        }
    })

    const copyMetadataAPI = (): void => {
        navigator.clipboard.writeText(`${endPoints.metadataapi}/${datasetId}`)
        toast.success('Copied to Clipboard')
    }

    const copyDataAPI = (): void => {
        navigator.clipboard.writeText(`${endPoints.dataapi}/${datasetId}/${subscriptionStatus?.data?.subscriptionId}`)
        toast.success('Copied to Clipboard')
    }

    return (
        <Fragment>
            <Show when={!subscriptionStatus?.isLoading && !dataset?.isLoading && !similarDatasets?.isLoading}>
                <Show when={!dataset.error}>
                    <Container className='mt-4'>
                        <div className='jumbotron'>
                            <Row>
                                <DatasetCard key={dataset?.data?._id} id={dataset?.data?._id} category={dataset?.data?.category} name={dataset?.data?.name} price={dataset?.data?.price} rating={dataset?.data?.rating} />
                                <Col sm={6} md={8} lg={9} xl={9}>
                                    <p className='display-6 text-capitalize'>{dataset?.data?.name}</p>
                                    <p className='lead'>{dataset?.data?.category}</p>
                                    <Show when={subscriptionStatus?.data?.isSubscribed}>
                                        <Link target='_blank' passHref href={`https://sepolia.etherscan.io/nft/${contractAddress.nftContractAddress}/${subscriptionStatus?.data?.tokenId}`}>
                                            <img src='https://cdn-icons-png.flaticon.com/128/6298/6298900.png' alt='NFT' height={50} width={50} />
                                        </Link>
                                    </Show>
                                    <p className='lead mt-3'>{dataset?.data?.description}</p>
                                    <div>{datasetTagsToDisplay}</div>
                                    <Show when={!subscriptionStatus?.data?.isSubscribed}>
                                        <Show when={!isTransactionProcessing}>
                                            <button className='btn' onClick={subscribe}>
                                                Subscribe {`${dataset?.data?.price} LFT`}<i className='fa-solid fa-circle-plus'></i>
                                            </button>
                                        </Show>
                                        <Show when={isTransactionProcessing}>
                                            <button disabled className='btn'>
                                                Processing <i className='fas fa-circle-notch fa-spin color-gold'></i>
                                            </button>
                                        </Show>
                                        <button className='btn' onClick={copyMetadataAPI}>Metadata API <i className='fa-solid fa-copy'></i></button>
                                    </Show>
                                    <Show when={subscriptionStatus?.data?.isSubscribed}>
                                        <Show when={!isTransactionProcessing}>
                                            <button className='btn' onClick={unsubscribe}>
                                                Unsubscribe - Refund {dataset?.data?.price / 2} LFT
                                            </button>
                                        </Show>
                                        <Show when={isTransactionProcessing}>
                                            <button disabled className='btn'>
                                                Processing <i className='fas fa-circle-notch fa-spin color-gold'></i>
                                            </button>
                                        </Show>
                                        <button className='btn' onClick={copyDataAPI}>Data API <i className='fa-solid fa-copy'></i></button>
                                    </Show>
                                </Col>
                            </Row>

                        </div>
                        <Row>
                            <p className='lead text-center text-white mb-4'>Similar Datasets</p>
                            {similarDatasetsToDisplay}
                        </Row>
                    </Container>
                </Show>
                <Show when={dataset.error}>
                    <Error />
                </Show>
            </Show>
            <Show when={subscriptionStatus?.isLoading || dataset?.isLoading || similarDatasets?.isLoading}>
                <Loading />
            </Show>
        </Fragment >
    )
}

export default ViewDatasetPage