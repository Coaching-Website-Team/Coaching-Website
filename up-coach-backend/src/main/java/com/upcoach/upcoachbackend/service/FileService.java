package com.upcoach.upcoachbackend.service;


import com.upcoach.upcoachbackend.enums.CoachDocuments;
import com.upcoach.upcoachbackend.exception.FileNullException;
import com.upcoach.upcoachbackend.exception.FileTypeInappropriateException;
import com.upcoach.upcoachbackend.model.Coach;
import com.upcoach.upcoachbackend.model.Offer;
import com.upcoach.upcoachbackend.utils.FileConfig;
import com.upcoach.upcoachbackend.utils.MD5;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import com.upcoach.upcoachbackend.utils.FileUtils;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;

@Service
@Transactional
@AllArgsConstructor
public class FileService {
    private final CoachService coachService;
    private final FileConfig fileConfig;

    public void uploadCoachDocuments(Coach coach, MultipartFile file, CoachDocuments type) throws IOException, NoSuchAlgorithmException {
        if (file == null || file.getContentType() == null) throw new FileNullException();
        if(!file.getContentType().startsWith("image") && !file.getContentType().startsWith("application/pdf")){
            throw new FileTypeInappropriateException(file.getContentType().toLowerCase(),"image","pdf");
        }
        String documentName = MD5.getMD5Hash(coach.getEmail() + type.value()) + "." + FileUtils.getExtension(file);
        String documentPath = fileConfig.getDirectory();
        FileUtils.saveFile(file,documentPath, documentName);
        coachService.setCoachDocument(coach,type,documentName);
    }
}
