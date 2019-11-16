import { DirectUpload } from 'activestorage';


export function imageUpload(
    file,
    props = false,
    field = false,
    previewField = false
) {
    return new Promise((resolve, reject) => {
        const upload = new DirectUpload(
            file, `"http://localhost:3000"rails/active_storage/direct_uploads`);
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