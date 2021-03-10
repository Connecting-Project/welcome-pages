package com.hawaiianpizza.welcome.Controller;

import com.hawaiianpizza.welcome.Model.Mail;
import com.hawaiianpizza.welcome.Service.MailService;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class MailController {
    private final MailService mailService;
    public MailController(MailService mailService) {
        this.mailService = mailService;
    }
    @GetMapping("/test")
    public String dispMail() {
        return "mail";
    }

    @PostMapping("/mail")
    public void execMail(Mail mailDto) {
        mailService.mailSend(mailDto);
    }
}