    import React, { useState } from "react";
    import axios from 'axios'
    import { View, Text, Button, TextInput, Image, Pressable } from "react-native";

    const EnterPONumber = ({ setStep, poNumber, setPONumber }) => {
    const handleNext = async () => {

        const response = await axios.get(`http://localhost:5000/api/po/${poNumber}`)
        console.log(response.data)

        
        setStep(2);
    };

    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            color: "white",
        }}
        >
        <Image
            source={require("../assets/logo.png")}
            style={{
            height: "80px",
            width: "370px",
            marginBottom: 100,
            borderRadius: "5px ",
            }}
        />
        <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: "bold" }}>
            Enter Pick-Up or PO Number
        </Text>
        <TextInput
            value={poNumber}
            onChangeText={(text) => setPONumber(text)} // Update the state with the entered text
            style={{
            color: "black",
            width: 300,
            height: 60,
            borderColor: "white",
            backgroundColor: "white",
            borderWidth: 1,
            fontSize: 24,
            marginBottom: 20,
            paddingLeft: 20,
            }}
        />
        <View
            style={{ flexDirection: "row", justifyContent: "center", width: 300 }}
        >
            <Pressable
            label="NEXT"
            onPress={handleNext}
            color="darkgreen" // Change the color to a different one
            style={{
                width: "45%",
                height: 60,
                fontSize: 24,
                backgroundColor: "darkgreen",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
                color: "white",
            }}
            >
            <Text style={{ color: "white", fontSize: 24 }}>NEXT</Text>
            </Pressable>
        </View>
        </View>
    );
    };

    export default EnterPONumber;
