import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import { useState } from 'react'

export const useUploadData = () => {
  const [uri, setUri] = useState('')
  const [success, setSuccess] = useState("")

  const uploadData = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.canceled) {
        const selectedUri = result.assets[0].uri
        setUri(selectedUri)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpload = async (
    route,
    name,
    price,
    category,
    description,
    quantity
  ) => {
    const formData = new FormData()
    formData.append('productImage', {
      uri: uri,
      name: 'uploaded_image.jpg', // Default name if extraction fails
      type: 'image/jpeg', // Or 'image/png' based on the file type
    })
    formData.append('productName', name)
    formData.append('productPrice', price)
    formData.append('productCategory', category)
    formData.append('productDescription', description)
    formData.append('productQuantity', quantity)
    try {
      await axios.post(route, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      setSuccess("created")
    } catch (error) {
      console.error(error)
    }
  }
  return {uploadData, handleUpload, success, uri}
}
