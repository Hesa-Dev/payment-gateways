"use client";

import { useState } from "react";

interface closeBox {
  isClose: (tipo: any) => void
  loadTbl_client: () => void
}

export default function EDIT() {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        status: "",
        nif: "",
        tipo: "normal",
        morada: "",
        phone: "",
        data: ""
    })
    const [boxOpen, setBoxOpen] = useState({ add: false, edit: false, arg: true })
    
  return <>
    <div className="bx-form w-1/2 border">
        
         add
     </div>
  </>;
}
