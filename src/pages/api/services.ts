import { NextApiRequest, NextApiResponse } from "next";

import {services} from "../../../data.ts";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req : NextApiRequest,res : NextApiResponse) => {
    // by default get requests 
    console.log("services");
    
    return res.status(200).json({services});
}