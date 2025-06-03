/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirerInput from "inquirer"
import qr_image_generator from "qr-image"
import fs from "fs"

inquirerInput
    .prompt([
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Link here :...'
        },
    ])
    .then(answers => {

        const i = 0;
        const url = answers.link;
        console.log("the Link you've entered is ", url);

        var qr_svg = qr_image_generator.image(url);
        qr_svg.pipe(fs.createWriteStream('QR-image logos Rhema'+i +'.png'));

// create file with entree name in it

        fs.writeFile(url+".txt", "Here is the Url, an image was generated for "+url, (error) => {
            if (error) throw error;
            console.log("The file has been saved!");
        });


    })
    .catch(error => {
        console.error('OOps!! Something wrong happened')
    })