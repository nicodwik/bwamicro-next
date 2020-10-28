import React from 'react'
import Link from 'next/link'
import IconPlay from 'public/images/btn_play.svg'

export default function RenderItem({item}) {
    console.log(item)
    return (
        <div className='w-1/4 px-4'>
            <div className="item relative">
                <IconPlay></IconPlay>
                <figure className="item-image">
                    <img src={item?.thumbnail ?? ''} alt={item?.name ?? 'some information'} />
                </figure>
                <div className="item-meta">
                    <h4 className="text-md text-gray-900">{item?.name ?? 'Course Name'} </h4>
                    <h5 className="text-sm text-gray-600">{item?.level ?? 'Course Level'} </h5>
                </div>
                <Link href="/course/[slug]" as={`/course/${item.id}`}><a className="link-wrapped"></a></Link>
            </div>
        </div>
    )
}