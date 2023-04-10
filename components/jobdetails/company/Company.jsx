import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox} >
        <Image
          source={{
            uri: checkImageURL(companyLogo) ? 
            "https://img.freepik.com/free-vector/flat-design-sc-cs-logo-template_23-2149242040.jpg?t=st=1681041159~exp=1681041759~hmac=ff418d15e9f7d4df2ede94543c7d7925e1800b6533a6328aefebb808ce559211":
            companyLogo
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle} >
          {jobTitle}
        </Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>
          {companyName} / 
        </Text>
        <View style={styles.locationBox}>
          <Image 
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>

    </View>
  )
}

export default Company