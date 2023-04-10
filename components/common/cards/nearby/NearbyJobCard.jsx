import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { checkImageURL } from "../../../../utils"

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer} >
          <Image 
            source={{
              uri: checkImageURL(job.employer_logo)
                ? "https://img.freepik.com/free-vector/flat-design-sc-cs-logo-template_23-2149242040.jpg?t=st=1681041159~exp=1681041759~hmac=ff418d15e9f7d4df2ede94543c7d7925e1800b6533a6328aefebb808ce559211"
                : job.employer_logo,
            }} 
            resizeMode="contain"
            style={styles.logoImage}
          />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          { job.job_title }
        </Text>
        <Text style={styles.jobType} >{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard