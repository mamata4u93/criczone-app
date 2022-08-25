import React, { useState } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, View, Box, Text, Center, Button, useColorMode, Image } from "native-base";
import { styles, Images } from '../common'
import { HeaderBar } from '../components'
import { useTranslation } from "react-i18next";

const DidyouknowDetail = (props) => {
    const { t } = useTranslation();
    const { route } = props;


    alert(JSON.stringify(route.params.name))
    return (
        <Box style={styles.container}>
            <HeaderBar menu />
            <ScrollView>
                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >
                    <Center mb='10'>

                        <Image mt="5" source={{
                            uri: Images.amitabh
                        }} size="2xl" w="100%" />

                        < Text fontSize="md" color="yellow.600" fontWeight='semibold' >
                            {t('didyouknowTitle')}
                        </Text>

                        


                    </Center>



                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default DidyouknowDetail