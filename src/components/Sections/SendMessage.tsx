import { Button, Stack, TextField, Container, CircularProgress } from "@mui/material"
import { StyledTypography } from "../Styled/StyledComponents"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';
import BoxSection from "../common/BoxSection";
import useSnackbar from "../../hooks/useSnackbar";
import SnackbarAlert from "../common/SnackbarAlert";


const SendMessage = ({ className }: { className?: string }) => {
    const VITE_EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID
    const VITE_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const [loading, setLoading] = useState(false)
    const messageSnackbar = useSnackbar({ duration: 6000 })

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
    })

    const [touched, setTouched] = useState({
        name: false,
        email: false,
    });

    const formRef = useRef(null)

    const validateName = (name: string) => {
        if (name.length < 3) {
            return "O nome deve ter pelo menos 3 letras.";
        }
        return "";
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Email inválido";
        }
        return "";
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
        if (name === "name" && touched.name) {
            setErrors({ ...errors, name: validateName(value) });
        } else if (name === "email" && touched.email) {
            setErrors({ ...errors, email: validateEmail(value) });
        }
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setTouched({ ...touched, [name]: true });

        if (name === "name") {
            setErrors({ ...errors, name: validateName(value) });
        } else if (name === "email") {
            setErrors({ ...errors, email: validateEmail(value) });
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);

        if (nameError || emailError) {
            setErrors({
                name: nameError,
                email: emailError,
            });
            return;
        }

        const serviceID = VITE_EMAILJS_SERVICE_ID
        const templateID = VITE_EMAILJS_TEMPLATE_ID
        const userID = VITE_EMAILJS_USER_ID

        if (serviceID === '' || templateID === '' || userID === '') {
            console.error('E-mailJS ID inválido');
            return
        }

        if (formRef.current === null) return
        setLoading(true)
        emailjs.sendForm(serviceID, templateID, formRef.current, userID)
            .then((_response) => {
                messageSnackbar.showSuccess('Mensagem enviada com sucesso!', 6000)
            })
            .catch((err) => {
                messageSnackbar.showError('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.', 6000)
                console.log('Erro ao enviar o email', err);
            })
            .finally(() => {
                setLoading(false)
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                })
                setErrors({
                    name: "",
                    email: "",
                })
                setTouched({
                    name: false,
                    email: false,
                })
            })
    }

    return (
        <>
            <BoxSection title="Fale Comigo" className={className}>
                <StyledTypography variant="h1" indicate>Fale Comigo</StyledTypography>
                <Container maxWidth="sm">
                    <form onSubmit={handleSubmit} ref={formRef} style={{ margin: '2rem 0' }}>
                        <Stack gap={2}>
                            <TextField
                                size="small"
                                label="Nome"
                                value={formData.name}
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Nome"
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                            <TextField
                                size="small"
                                label="Email"
                                value={formData.email}
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Email"
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                size="small"
                                label="Mensagem"
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                id="message"
                                multiline
                                rows={6}
                                placeholder="Mensagem"
                            />
                            <Button
                                disabled={(formData.name === "" || formData.email === "" || formData.message === "" || !!errors.name || !!errors.email) || loading}
                                variant="contained"
                                type="submit"
                            >
                                {loading ? <CircularProgress size={20} /> : "Enviar"}
                            </Button>
                        </Stack>
                    </form>
                </Container>
            </BoxSection>
            <SnackbarAlert {...messageSnackbar} />
        </>
    )
}

export default SendMessage
