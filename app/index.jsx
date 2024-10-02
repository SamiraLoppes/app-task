import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {Typography} from "../src/components/Typography"
import {Input} from "../src/components/Input"
import {Button} from "../src/components/Button"
import {Divider} from "../src/components/Divider"
import { useState } from "react";
import {Link} from "expo-router"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function entrar() {
        console.log("Entrou")
        console.log(email, senha)
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Typography variant="title">
                Bem-vindo!
            </Typography>
            <View style={styles.form}>
                <Typography variant="subtitle">
                    Entre na sua conta para acessar nossa Plataforma.
                </Typography>
                <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder='Senha'
                    secureTextEntry
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />
                <Button
                    text="Entrar"
                    onPress={entrar}
                />
                <Divider text="Ou" />
                <Link style={styles.link} href={"/register-page"}>Criar Conta</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#000",
        paddingHorizontal: 10
    },
    form: {
        width: '100%',
        alignItems: 'center',
        gap: 15,
    },
    link: {color: "white", fontSize: 23}
});
