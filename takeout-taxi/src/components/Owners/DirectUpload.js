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
        const upload = new DirectUpload(
            file, `http://localhost:3000/rails/active_storage/direct_uploads`);
        upload.create((error, blob) => {
            if (error) {
                alert('something went wrong with upload!');
            } else {
                // if (props) {
                //     props.change(field, blob.signed_id);
                //     props.change(previewField, blob.service_url);
                // }
                resolve({ data: { ...blob, link: blob.service_url } })
            }
        });
    })
}
