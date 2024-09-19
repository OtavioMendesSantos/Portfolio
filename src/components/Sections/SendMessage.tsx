import { Box, Button, Stack, TextField, Container } from "@mui/material"
import { StyledTypography } from "../Styled/StyledComponents"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';

const SendMessage = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    })

    const formRef = useRef(null)

    const VITE_EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID
    const VITE_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormdata({ ...formdata, [name]: value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const serviceID = VITE_EMAILJS_SERVICE_ID
        const templateID = VITE_EMAILJS_TEMPLATE_ID
        const userID = VITE_EMAILJS_USER_ID

        if (serviceID === '' || templateID === '' || userID === '') {
            console.error('E-mailJS ID inválido');
            return
        }

        if (formRef.current === null) return
        emailjs.sendForm(serviceID, templateID, formRef.current, userID)
            .then((response) => {
                console.log('Email enviado com sucesso!', response.status, response.text);
                alert('Mensagem enviada com sucesso!');
            })
            .catch((err) => {
                console.log('Erro ao enviar o email', err);
                alert('Ocorreu um erro ao enviar sua mensagem.');
            });
    }

    return (
        <Box component="section">
            <StyledTypography variant="h1" indicate>Fale Comigo</StyledTypography>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit} ref={formRef} style={{ margin: '2rem 0' }}>
                    <Stack gap={2}>
                        <TextField
                            size="small"
                            label="Nome"
                            value={formdata.name}
                            name="name"
                            onChange={handleChange}
                            type="text"
                            placeholder="Nome"
                        />
                        <TextField
                            size="small"
                            label="Email"
                            value={formdata.email}
                            name="email"
                            onChange={handleChange}
                            type="text"
                            placeholder="Email"
                        />
                        <TextField
                            size="small"
                            label="Mensagem"
                            value={formdata.message}
                            onChange={handleChange}
                            name="message"
                            id="message"
                            multiline
                            rows={6}
                            placeholder="Mensagem"
                        />
                        <Button
                            disabled={formdata.name === "" || formdata.email === "" || formdata.message === ""}
                            variant="contained"
                            type="submit"
                        >
                            Enviar
                        </Button>
                    </Stack>
                </form>
            </Container>
        </Box>
    )
}

export default SendMessage
