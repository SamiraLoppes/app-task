import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { Input } from '../src/components/Input';
import { Typography } from '../src/components/Typography';
import { Button } from '../src/components/Button';
import { Link } from 'expo-router';

export default function RegisterPage() {
    const [email, setEmail] = useState("")
    const [senha, setcriarSenha] = useState("")

    function cadastrar() {
    console.log("cadastro")
        console.log(email)
    }

   return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Typography variant="title">
                Bem-vindo!
            </Typography>
            <View style={styles.form}>
                <Typography variant="subtitle">
                    Crie sua conta para acessar nossa Plataforma.
                </Typography>
                <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder='Criar Senha'
                    secureTextEntry
                    value={senha}
                    onChangeText={(text) => setcriarSenha(text)}
                />
                <Button
                    text="Cadastrar"
                    onPress={cadastrar}
                />
            </View>
            <Link style={styles.link} href={"/"}>Ja tenho uma conta</Link>
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