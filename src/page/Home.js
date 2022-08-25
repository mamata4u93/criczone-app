import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, Dimensions } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { styles, Images, Config } from '../common'
import { useTranslation } from "react-i18next";
import { Box, Text, Image, Center, Button, Heading, HStack, Pressable, Menu, SearchIcon, HamburgerIcon } from "native-base";
import { Icons } from '../components';
import { getHomeSettings, getHeadlineList, getNewsCategory, getNewsList , allSingleData} from '../store/MainRedux'

const Home = (props) => {
    const { navigation } = props
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const [fastTab, setFastTab] = useState('ongoing')
    const token = Config.token
    const homeSettings = useSelector((state) => state.auth.homeSettings)
    const headlines = useSelector((state) => state.auth.headlines)
    const categorys = useSelector((state) => state.auth.categorys)

    // alert(JSON.stringify(categorys))



    useEffect(() => {
        dispatch(getHomeSettings({ token }))
        dispatch(getHeadlineList({ token }))
        dispatch(getNewsCategory({ token }))
        dispatch(getNewsList({ page: 1, size: 500, token }))
    }, []);



    return (
        <Box style={styles.container} pb='40'>

            <ScrollView>

                <Box bg="info.400">
                    <HStack space={10}>
                        <HStack />
                        <Box w="5%" mb="10">
                            <Menu w="190" trigger={triggerProps => {
                                return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <HamburgerIcon size="30" color="white" mt="2" />
                                </Pressable>
                            }}>
                                <Menu.Item>World</Menu.Item>
                                <Menu.Item>Africa</Menu.Item>
                                <Menu.Item>Asia</Menu.Item>
                                <Menu.Item>Europe</Menu.Item>
                                <Menu.Item>Middle East</Menu.Item>
                                <Menu.Item>Latin Amrica</Menu.Item>
                                <Menu.Item>UK</Menu.Item>
                                <Menu.Item>US & Canada</Menu.Item>
                                <Menu.Item>Paradise Papers</Menu.Item>
                                <Menu.Item>Business</Menu.Item>
                                <Menu.Item>Tech</Menu.Item>
                                <Menu.Item>Science</Menu.Item>
                                <Menu.Item>Hralth</Menu.Item>
                                <Menu.Item>Entretainment</Menu.Item>
                            </Menu>
                        </Box>
                        <HStack />
                        <HStack />
                        <Text fontSize="4xl" color="white" fontWeight="600">{homeSettings?.bottom_category}</Text>
                        <HStack />
                        <HStack />
                        <SearchIcon size="10" color="white" mt="2" />
                        <HStack />
                        <HStack>
                            <Box w="5%" mb="10" mt="2">
                                <Menu w="190" trigger={triggerProps => {
                                    return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                        <Icons font={"Entypo"} name={"dots-three-vertical"} color={"white"} size={25} />
                                    </Pressable>
                                }}>
                                    <Menu.Item>Satting</Menu.Item>
                                    <Menu.Item>Help</Menu.Item>
                                    <Menu.Item>Contact us</Menu.Item>
                                    <Menu.Item>Other BBC apps</Menu.Item>
                                </Menu>
                            </Box>
                        </HStack>
                    </HStack>


                    <HStack space={20} mb="2">

                        <Button variant="link" onPress={() => (setFastTab('ongoing'))}><Text color="white" fontSize="lg">Top Stories</Text></Button>
                        <Button variant="link" onPress={() => (setFastTab('upcoming'))}><Text color="white" fontSize="lg">Video</Text></Button>
                        <Button variant="link" onPress={() => (setFastTab('completed'))}><Text color="white" fontSize="lg">My News</Text></Button>
                        <Button variant="link" onPress={() => (setFastTab('Popular'))}><Text color="white" fontSize="lg">Popular</Text></Button>
                        <Button variant="link" onPress={() => (setFastTab('LIVE'))}><Text color="white" fontSize="lg">LIVE</Text></Button>

                    </HStack>
                </Box>


                {fastTab == 'ongoing' && (
                    categorys.map((item, key) => <Box key={key}>
                        
                        <Box bgColor="white" shadow={4} mb="5">
                            <Image h='300' w='100%' source={
                                Images.militarybase
                            } />
                            <Text fontSize="2xl" fontWeight="600" mx="2">{item?.categorys?.title}</Text>
                            <Text fontSize="md" fontWeight="600" mx="2">{item?.categorys?.meta_description}</Text>
                        </Box>
                        <Box bgColor="white" shadow={7} borderRadius="5">
                            <HStack space="4" ml="2">
                                <Image h='40' w='50%' source={
                                    Images.nooria
                                } />
                                <Box>
                                    <Text fontSize="xl" fontWeight="600">some text</Text>
                                    <HStack mt="20">
                                        <Text fontSize="lg" fontWeight="600">3h |</Text>
                                        <Button size="lg" variant="link" mt="-2" onPress={() => {
                                            // dispatch(allSingleData(item));
                                            navigation.navigate("DidyouknowDetail" ,{name:'mamata'});
                                        }}>
                                            Science & Environment
                                        </Button>
                                    </HStack>
                                </Box>
                            </HStack>
                        </Box>

               



                    </Box>))}


                {fastTab == 'upcoming' && (<Box><Text fontSize="2xl" color='black' >2</Text></Box>)}
                {fastTab == 'completed' && (<Box><Text fontSize="2xl" color='black' >3</Text></Box>)}
                {fastTab == 'Popular' && (<Box><Text fontSize="2xl" color='black' >13</Text></Box>)}
                {fastTab == 'LIVE' && (<Box><Text fontSize="2xl" color='black' >31</Text></Box>)}
            </ScrollView>

        </Box>
    )
}
export default Home