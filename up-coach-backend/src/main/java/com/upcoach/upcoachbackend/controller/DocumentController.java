package com.upcoach.upcoachbackend.controller;


import com.upcoach.upcoachbackend.utils.FileConfig;
import lombok.AllArgsConstructor;


import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import static org.springframework.http.MediaType.*;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/document")
public class DocumentController {
    private FileConfig fileConfig;

    @GetMapping(path =  "/{id}",
            produces = {IMAGE_PNG_VALUE, IMAGE_GIF_VALUE, IMAGE_JPEG_VALUE, APPLICATION_PDF_VALUE}
    )
    public @ResponseBody byte[] getDocument(@PathVariable("id") String id) throws IOException {
        InputStream inputStream = new FileInputStream(fileConfig.getDirectory() + "/" + id);
        return IOUtils.toByteArray(inputStream);
    }

}
