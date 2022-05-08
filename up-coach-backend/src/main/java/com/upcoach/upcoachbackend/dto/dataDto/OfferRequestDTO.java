package com.upcoach.upcoachbackend.dto.dataDto;

import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public record OfferRequestDTO(
        String tags,
        @NotNull(message = "Title is required")
        @NotEmpty(message = "Title should not be empty")
        String title,
        @NotNull(message = "Description is required")
        String description,
        long minPrice,
        long maxPrice,
        MultipartFile image
) {
    public OfferRequestDTO( String tags, @NotNull(message = "Title is required")
    @NotEmpty(message = "Title should not be empty")
            String title, @NotNull(message = "Description is required")
                                    String description, long minPrice, long maxPrice, MultipartFile image) {
        this.tags = tags;
        this.title = title;
        this.description = description;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.image = image;
    }


}
