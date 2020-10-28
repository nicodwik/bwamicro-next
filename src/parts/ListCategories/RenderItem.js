import { data } from 'autoprefixer'
import React from 'react'
import Link from 'next/link'
import formatThousand from 'src/helpers/formatThousand'

export default function RenderItem({item}) {
    return (
        <div>
            <div className="w-full px-4 h-100">
                <div className="card relative transititon-all duration-">
                    {item.imageName}
                    <div className="card-meta mt-10">
                        <h4 className="text-lg transition-all duration-200 w-1/2">
                            {item.name}
                        </h4>
                        <h5 className="text-sm transition-all mt-2 duration-500">
                            {formatThousand(item.total)}
                        </h5>
                        <Link href="#"><a className='link-wrapped'></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
