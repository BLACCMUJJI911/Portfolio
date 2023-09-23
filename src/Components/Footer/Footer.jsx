import { Button } from "@mui/material"
import InputGroup from 'react-bootstrap/InputGroup';

export default function Footer() {

    return (
        <>
            
            <footer className="footer-container container-fluid d-flex flex-row gap-3 justify-content-evenly p-5">
                <section className="sec1 container d-flex flex-column gap-1 p-2">

                    <h4>Contact</h4>
                    <p>E-mail: arieskm70@gmail.com</p>
                    <p>Contact: +92 313 3589 623</p>
                    <p>GitHub: <a className="text-decoration-none text-black" href="https://github.com/BLACCMUJJI911"> https://github.com/BLACCMUJJI911 </a> </p>

                </section>
                <section className="sec2 container d-flex flex-column gap-2 p-2">

                    <h4>Donate a Coffee For Dev</h4>
                    <p>Donate at My Number</p>


                    <span className="d-flex flex-row gap-2">

                        <InputGroup.Text className="donate-num" id="inputGroup-sizing-default">
                            +92 313 3589 623
                        </InputGroup.Text>
                        <Button variant="contained" className="btn-donate">Donate</Button>
                    </span>

                </section>

                <section className="sec3 container d-flex flex-column gap-2 p-2">

                    <h4>Any Question?</h4>

                    <input placeholder="Name" type="text" name="Name" className="ftr-name" />
                    <input placeholder="Email" type="email" inputMode="email" name="Email" className="ftr-email" />
                    <textarea placeholder="Message" name="Message" className="txt-area" cols="20" rows="3"></textarea>
                    <Button variant="contained" >Submit</Button>

                </section>

            </footer>
            

        </>
    )

}