"use client";
import { useState } from "react";
import { GridList, GridListItem } from "react-aria-components";
import Image from "next/image";

export default function PlayListBox({ pokemon }) {
  return (
    <div className="flex">
      <GridList
        layout="grid"
        className="grid place-items-center grid-cols-2 md:grid-cols-4 gap-4"
        selectionMode="multiple"
        selectionBehavior="toggle"
        items={pokemon}
        aria-label={`select playlists`}
      >
        {(item) => (
          <GridListItem
            key={item.name}
            className="flex-col border-2 border-gray-300 rounded data-selected:bg-red-500 data-selected:drop-shadow-md data-hovered:blur-[2px] "
            onPress={() => console.log(`pressed ${item.name}`)}
            textValue={item.name}
          >
            <img
              height="100"
              width="100"
              alt=""
              src={item.sprites.front_default}
            />
            <p>{item.name}</p>
          </GridListItem>
        )}
      </GridList>
    </div>
  );
}
