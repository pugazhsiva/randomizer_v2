'use client'
import { ListBox,ListBoxItem, ListBoxLoadMoreItem } from "react-aria-components";



export default function VideoList() 
{
    let items=[{id:"hi"},{id:"hello"},{id:"bye"}]
    return(
        
            <ListBox items={items} selectionMode="single" selectionBehavior="replace" className="border-2 border-gray-300 rounded-lg w-full p-2">
            {items.map((item) => <ListBoxItem key={item.id} className="p-2 rounded data-hovered:bg-blue-200 data-selected:bg-blue-300 data-pressed:bg-red-200 cursor-pointer">{item.id}</ListBoxItem>)}
            <ListBoxLoadMoreItem onLoadMore={()=>{console.log("load more")}} />
            </ListBox>
        
    )

}