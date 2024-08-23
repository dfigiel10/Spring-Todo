package com.project.todo_backend.service;

import com.project.todo_backend.dto.ItemDto;

import java.util.List;

public interface ItemService {

    ItemDto createItem(ItemDto itemDto);

    ItemDto getItemById(Long itemId);

    List<ItemDto> getAllItems();

    ItemDto updateItem(Long itemId, ItemDto updatedItem);

    void deleteItem(Long itemId);
}
