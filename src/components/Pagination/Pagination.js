import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/theme';

const Pagination = ({pageCount, pageNumber, setPageNumber}) => {
  const next = () => {
    setPageNumber(num => num + 1);
  };

  const prev = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(num => num - 1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pageCount); i++) {
    pageNumbers.push(i);
  }

  const changePage = number => {
    setPageNumber(number);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={prev} style={styles.number}>
        <Text style={styles.numberText}>{'<'}</Text>
      </TouchableOpacity>
      <ScrollView horizontal contentContainerStyle={styles.scrollStyle}>
        {pageNumbers.map(number => (
          <TouchableOpacity
            onPress={() => changePage(number)}
            style={[
              styles.number,
              pageNumber === number && styles.activeNumber,
            ]}
            key={number}>
            <Text
              style={[
                styles.numberText,
                pageNumber === number && styles.activeNumberText,
              ]}>
              {number}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={next} style={styles.number}>
        <Text style={styles.numberText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: COLORS.white,
    paddingVertical: 4,
  },
  scrollStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  number: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 64,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  numberText: {
    fontSize: 16,
    color: COLORS.black,
  },
  activeNumber: {
    backgroundColor: COLORS.green,
  },
  activeNumberText: {
    color: COLORS.white,
  },
});
