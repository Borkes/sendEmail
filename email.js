const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: 'youAccount@qq.com',
        pass: 'xxxxxxxx'      // //这里密码不是qq密码，是你设置的smtp密码，在qq邮箱中设置
    }
});
let mailOptions = {
    from: '这里应该可以随便加  <1043568089@qq.com>', // sender address
    to: '1043568089@qq.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world', // plain text body
    html: '<b>Hello world </b> 图片： <img src="cid:0001"/>', // html body
    attachments: [           //附件
        {
            filename: 'spring.jpg',
            path: './spring.jpg',
            cid: '0001'
        },
        {
            filename: 'js附件',
            path: './moment.js'
        }
    ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

