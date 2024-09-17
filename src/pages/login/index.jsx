import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import {MdEmail, MdLock} from 'react-icons/md';
import bannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import {
  Container,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TextContent,
  Title,
  TitleHighlight,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email não é válido")
      .required("campo obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve conter no mínimo 6 caracteres")
      .required(""),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      alert("Houve algum erro, tente novamente")
    }
  };

  console.log("errors", errors);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais
              tecnologias e entrar mais rápido nas empresas mais desejadas.
              agora!
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu Login</TitleLogin>
              <SubtitleLogin> Caça seu login e make the change._</SubtitleLogin>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  control={control}
                  name="email"
                  errorMessage={errors.email?.message}
                  placeholder="E-mail"
                />
                <Input
                  control={control}
                  name="senha"
                  errorMessage={errors.senha?.message}
                  placeholder="Senha"
                  type="password"
                />

                <Button
                  title="Entrar"
                  type="submit"
                  variant="secondary"
                
                />
              </form>

              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar Conta</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Row>
      </Container>
    </>
  );
};

export { Login };
