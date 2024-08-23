package com.project.todo_backend.mapper;

import com.project.todo_backend.dto.ItemDto;
import com.project.todo_backend.entity.Item;

public class ItemMapper {

    public static ItemDto mapToItemDto(Item item) {
        return new ItemDto(
                item.getId(),
                item.getTitle(),
                item.getDescription(),
                item.getCompleted()
                // item.getDueDate()
        );
    }

    public static Item mapToItem(ItemDto itemDto) {
        return new Item(
                itemDto.getId(),
                itemDto.getTitle(),
                itemDto.getDescription(),
                itemDto.getCompleted()
                // itemDto.getDueDate()
        );
    }
}
