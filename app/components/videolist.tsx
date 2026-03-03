'use client'
import { ListBox,ListBoxItem, ListBoxLoadMoreItem } from "react-aria-components";



export default function VideoList({items,setVideo}:{items:{id:string,name:string}[],setVideo:(src:string)=>void}) 
{
    
    return(
        
            <ListBox items={items} selectionMode="single" selectionBehavior="replace" className="border-2 border-gray-300 rounded-lg w-full p-2">
            {items.map((item) => <ListBoxItem key={item.id} onPress={()=>setVideo(item.id)} className="p-2 rounded data-hovered:bg-blue-200 data-selected:bg-blue-300 data-pressed:bg-red-200 cursor-pointer">{item.name}</ListBoxItem>)}
            <ListBoxLoadMoreItem onLoadMore={()=>{console.log("load more")}} />
            </ListBox>
        
    )

}