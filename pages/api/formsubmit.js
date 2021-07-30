import axios from 'axios'


export default function handler(req, res) {
    if (req.method === 'POST') {

        res.status(200).json({ success: 'im here' })

        let info = req.body

        axios.post('https://freelance-backend1.herokuapp.com/formdata', info).then(response => {
            console.log('data sent to backend');
            console.log(response)
        }).catch((err) => {
            console.log(err)
        });




    } else {
        console.log('fail')
    }
}