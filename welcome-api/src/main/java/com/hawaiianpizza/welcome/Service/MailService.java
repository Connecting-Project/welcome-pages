package com.hawaiianpizza.welcome.Service;

import com.hawaiianpizza.welcome.Model.Mail;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;
@Service
@AllArgsConstructor
public class MailService {
    private JavaMailSender mailSender;
    private static final String FROM_ADDRESS = "ssafystudy@gmail.com";

    public void mailSend(Mail mailDto) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(MailService.FROM_ADDRESS);
        message.setFrom(mailDto.getEmail());
        message.setSubject(mailDto.getEmail());
        message.setText(mailDto.getMessage());

        mailSender.send(message);
    }
}