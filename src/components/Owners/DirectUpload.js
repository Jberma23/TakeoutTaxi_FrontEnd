import { DirectUpload } from 'activestorage';
import { blockStatement } from '@babel/types';

export function imageUpload(
    file,
    props = false,
    field = false,
    previewField = false
) {
    return new Promise((resolve, reject) => {
        // if (props) {
        //     props.change(previewField, '/spinner.gif');
        // }

        let serviceUrlLink1
        let serviceUrlLink2
        const upload = new DirectUpload(
            file, `https://cors-escape.herokuapp.com/https://takeouttaxi-backend.herokuapp.com/rails/active_storage/direct_uploads`);
        upload.create((error, blob1) => {
            if (error) {
                alert('something went wrong with upload!');
            } else {
                // if (props) {
                //     props.change(field, blob.signed_id);
                //     props.change(previewField, blob.service_url);
                // }

                resolve({
                    data: {
                        ...blob1, link: blob1.service_url
                    }
                })
                // debugger
                // props.handleChange(blob.service_url)

            }
        });
        // return serviceUrlLink
    })
}