import { FC } from 'react'
import { Card, Col } from 'react-bootstrap'
import { DatasetCardProps } from '@/types/Types'
import Link from 'next/link'
import { Rating } from 'react-simple-star-rating'
import Show from './Show'
import { useRouter } from 'next/router'

const DatasetCard: FC<DatasetCardProps> = ({ id, category, name, price, rating }) => {
    const router = useRouter()

    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4'>
            <Card>
                <Card.Header className='pt-3'>
                    <div className={`${category.toLowerCase()}Container pt-4`} />
                </Card.Header>
                <Card.Footer className={`pt-4 pb-2 ps-4 ${category.toLowerCase()}Color`}>
                    <div className='nameContainer'>
                        <p>{name}</p>
                    </div>
                    <p className='smalltext'>{category} • {price + ' LFT'}</p>
                    <Rating className='card-rating' initialValue={rating} allowHover={false} allowFraction size={25} readonly /><br />
                    <Show when={router.pathname !== '/viewdataset'}>
                        <Link href={`/viewdataset?id=${id}`} className={`btn btn-block ${category.toLowerCase()}Btn`}>View Dataset <i className='fa-solid fa-circle-arrow-right'></i></Link>
                    </Show>
                </Card.Footer>
            </Card>
        </Col >
    )
}

export default DatasetCard