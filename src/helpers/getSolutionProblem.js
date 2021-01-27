import axios from 'axios';

export const getSolutionProblem = async (url,input_data) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    try {
        const resp = await axios.post(url, {input_data: input_data}, {headers: headers} );
        const { data } = resp.data;
        return {
            status:true,
            data: data
        };
    } catch (error) {
        return {
            status:false,
            data:error.response.data
        }
    }


}