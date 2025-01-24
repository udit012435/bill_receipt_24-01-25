import React , {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

export const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [address, setAddress] = useState('');
    const [item1, setItem1] = useState('');
    const [item2, setItem2] = useState('');
    const [item3, setItem3] = useState('');
    const [totall, setTotall] = useState('');


    const win = window.sessionStorage;

    const tformData = {
        name,
        phone1,
        phone2,
        address,
        item1,
        item2,
        item3,
        totall,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tformData) {
            win.setItem("formData2", JSON.stringify(tformData));
    
            alert("Form data saved to sessionStorage!");
            navigate("/");
        } else {
            alert("Please fill all the fields");
        }


    // Save data in sessionStorage
        

    win.setItem('name', name);
    win.setItem('phone1', phone1);
    win.setItem('phone2', phone2);
    win.setItem('address', address);
    win.setItem('item1', item1);
    win.setItem('item2', item2);
    win.setItem('item3', item3);
    win.setItem('totall', totall);


    // navigate("/");
};

useEffect(() => {
    // Load data from sessionStorage when component mounts

    if (win.getItem('name')) setName(win.getItem('name'));
    if (win.getItem('phone1')) setPhone1(win.getItem('phone1'));
    if (win.getItem('phone2')) setPhone2(win.getItem('phone2'));
    if (win.getItem('address')) setAddress(win.getItem('address'));
    if (win.getItem('item1')) setItem1(win.getItem('item1'));
    if (win.getItem('item2')) setItem2(win.getItem('item2'));
    if (win.getItem('item3')) setItem3(win.getItem('item3'));
    if (win.getItem('totall')) setTotall(win.getItem('totall'));

}, []);

        // Function to generate PDF
        const getContentInPDF = () => {
            // Create a container with form data as table rows
            const element = document.createElement('div');
            element.innerHTML = `
            <table>
           <header >
        <h1>SHOPPERS STOP BILL RECEIPT</h1>
        <hr style="border: 2px solid blue; width: 100%; margin-top: 10px;">
    </header>

    <table class="pdf-table" style="width: 100%; border-collapse: collapse; border: 1px solid #000; margin-top: 50px;">
        
        <tr>
        <td style="padding: 8px; border: 1px solid #000;"><b>Full Name</b></td>
        <td style="padding: 8px; border: 1px solid #000;">${name}</td>
        </tr>
        <tr>
        <td style="padding: 8px; border: 1px solid #000;"><b>Phone No. </b></td>
        <td style="padding: 8px; border: 1px solid #000;">${phone1}</td>
        </tr>
        <tr>
        <td style="padding: 8px; border: 1px solid #000;"><b>Phone No. </b></td>
        <td style="padding: 8px; border: 1px solid #000;">${phone2}</td>
        </tr>
        <tr>
        <td style="padding: 8px; border: 1px solid #000;"><b>Address</b></td>
        <td style="padding: 8px; border: 1px solid #000;">${address}</td>
        </tr>
        <tr>
        <td style="padding: 8px; border: 1px solid #000;"><b>Item 1</b></td>
        <td style="padding: 8px; border: 1px solid #000;">${item1}</td>
        </tr>
        <tr>
        <td style="padding: 8px; border: 1px solid #000;"><b>Item 2</b></td>
        <td style="padding: 8px; border: 1px solid #000;">${item2}</td>
        </tr>
        <tr>
        <td style="padding: 8px; border: 1px solid #000;"><b>Item 3</b></td>
        <td style="padding: 8px; border: 1px solid #000;">${item3}</td>
        </tr>
        <tr>
        <td style="padding: 8px; border: 1px solid #000;"><b>Total Ammount</b></td>
        <td style="padding: 8px; border: 1px solid #000;">${totall}</td>
        </tr>
    </table>`;
      
        // Configure and generate the PDF with html2pdf
        html2pdf()
            .set({
                margin: [10, 10, 10, 10], // top, right, bottom, left (in mm)
                filename: 'Form_Data.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, scrollY: 0  },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            })
            .from(element)
            .save()
            .catch(err => console.error("Error generating PDF:", err));
    };
    
    return (
        <>
        <div className="container  mt-5 mb-5 " >
            <div className="card text-light shadow" style={{padding: '50px'}}>
                <h3 >Form For Billing</h3>
                <hr style={{border: '2px solid #ADD8E6', width:'20%', opacity: '1.25', margin: '0',borderRadius: '10px' }} />
                <br />
                <h5 className='text-start'></h5>
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <div >
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <label for="name" class="form-label">Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="height"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                <label for="phone1" class="form-label">Phone No.</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="height"
                                        name="phone1"
                                        placeholder="+91 *** *** ***"
                                        value={phone1} onChange={(e) => setPhone1(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                <label for="phone1" class="form-label">Phone No.</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="height"
                                        name="phone2"
                                        placeholder="+91 *** *** ***"
                                        value={phone2} onChange={(e) => setPhone2(e.target.value)}
                                        
                                    />
                                </div>
                            </div>
                            <label for="address" class="form-label mt-3">Address</label>
                                    <textarea
                                        className="form-control"
                                        type="text"
                                        id="height"
                                        name="address"
                                        placeholder="Enter Address"
                                        value={address} onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                <label for="item1" class="form-label">Item 1</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="height"
                                        name="item1"
                                        placeholder="Enter Item 1"
                                        value={item1} onChange={(e) => setItem1(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-4">
                                <label for="item1" class="form-label">Item 2</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="height"
                                        name="item2"
                                        placeholder="Enter Item 2"
                                        value={item2} onChange={(e) => setItem2(e.target.value)}
                                        required
                                    />
                                
                                </div>
                                <div className="col-md-4">
                                <label for="item3" class="form-label">Item 3</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="height"
                                        name="item3"
                                        placeholder="Enter Item 3"
                                        value={item3} onChange={(e) => setItem3(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                    <label for="total" class="form-label">total</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="height"
                                            name="total"
                                            placeholder="Total Ammout "
                                            value={totall} onChange={(e) => setTotall(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>



                    {/* // buttons */}

                    <div className="form-group text-start mt-5 mb-0">
                        <label htmlFor="verification" className="mb-2">
                            Verification *<br />
                            <input type="checkbox" required /> I'm not a robot
                        </label>
                        
                    </div>

                    <div className="mt-4">
                        <div className="row">
                                <div >
                                    <button type="submit" className="btn btn-primary btn-submit" onClick={getContentInPDF}>
                                        Submit
                                    </button>
                                </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
};