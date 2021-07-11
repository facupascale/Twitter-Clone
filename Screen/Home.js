import React, {useState} from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import ListOfTweets from '../components/ListOfTweets'
import ModalDelete from '../components/ModalDelete'
import TweetInput from '../components/TweetInput'

export default function Home () {

    const [inputText, setInputText] = useState('')
    const [itemList, setItemList] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [itemSelected, setItemSelected] = useState({})
    
    const handleOnChange = text => {
        setInputText(text)
    }
    
    const handleAddItem = () => {
        setItemList([
        ...itemList,{
            id: Math.random().toString(),
            value: inputText
            }
        ])
        setInputText('')
    }
    
    const handlePressDelete = () => {
        const id = itemSelected.id
        setItemList(itemList.filter(item => item.id !== id))
        setModalVisible(false)
        setItemSelected({})
    }
    
    const handleVisible = id => {
        setItemSelected(itemList.find(item => item.id === id))
        setModalVisible(true)
    }

    
    return (
        <SafeAreaView style={styles.container}>
            <TweetInput inputText={inputText} handleOnChange={handleOnChange} handleAddItem={handleAddItem} />
            <ListOfTweets itemList={itemList} handleVisible={handleVisible}  />        
            <ModalDelete modalVisible={modalVisible} itemSelected={itemSelected} handlePressDelete={handlePressDelete}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
    
    
    
    

