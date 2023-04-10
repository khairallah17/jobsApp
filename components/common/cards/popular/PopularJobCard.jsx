import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { checkImageURL } from "../../../../utils"

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)} >
          <Image 
            source={{ uri: checkImageURL(item.employer_logo) 
              ?  "https://img.freepik.com/free-vector/flat-design-sc-cs-logo-template_23-2149242040.jpg?t=st=1681041159~exp=1681041759~hmac=ff418d15e9f7d4df2ede94543c7d7925e1800b6533a6328aefebb808ce559211"
              : item.employer_logo }} 
            resizeMode="contain"
            style={styles.logoImage}
          />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1} >{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          { item.job_title }
        </Text>
        <Text style={styles.location} >{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard