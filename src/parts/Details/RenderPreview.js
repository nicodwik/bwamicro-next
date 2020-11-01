import React from 'react'
import Youtube from 'react-youtube'
import Accordion, { IconPlay, IconLock, Item } from 'src/Components/Accordion'
import Modal from 'src/Components/Modal'

export default function RenderPreview({previews}) {
    return (
        <div className="accordion">
            <Accordion>
                {
                    (Active, toggle) => {
                        return previews?.map((item, index) => {
                            console.log(item)
                            return <Item id={item.id} name={item.name} child={item.lessons} active={Active} toggle={toggle}
                            key={`${index}-${item.id }`}>
                                {
                                    item?.lessons?.length > 0 && item.lessons.map((child, index2) => (
                                        <div key={`${index2}-${child.id}`} className="relative hover:bg-gray-200 flex justify-between items-center pl-8 pr-4 py-2">
                                            <span className="text-gray-600">
                                                {
                                                    child?.name ?? "Lessons Name"
                                                }
                                            </span>
                                            {
                                                index2 === 0 &&
                                                <Modal content={(toggleModal) => 
                                                    <Youtube videoId={child?.video} id={child?.video} 
                                                    opts={{playerVars: {
                                                        autoplay: 1,
                                                        controls: 0,
                                                        showinfo: 0
                                                    }}}>
                                                    </Youtube>}>
                                                    {
                                                        (toggleModal) => <span className="link-wrapped" onClick={toggleModal}></span>
                                                    }
                                                </Modal>
                                            }
                                            {index2 === 0 && <IconPlay className="fill-teal-500" width={20} height={20}></IconPlay>}
                                            {index2 !== 0 && <IconLock></IconLock> }
                                        </div>
                                    )) 
                                }
                            </Item>
                        })
                    } 
                }
            </Accordion>
        </div>
    )
}
