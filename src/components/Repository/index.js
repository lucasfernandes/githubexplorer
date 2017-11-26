/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFavorite } from 'redux/ducks/favorites';

/* Presentational */
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export class Repository extends Component {
  static propTypes = {
    style: View.propTypes.style,
    repository: PropTypes.shape({
      id: PropTypes.number,
      full_name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar: PropTypes.string,
      }),
      html_url: PropTypes.string,
      description: PropTypes.string,
      stargazers_count: PropTypes.number,
      watchers_count: PropTypes.number,
      forks_count: PropTypes.number,
    }).isRequired,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    const { repository } = this.props;

    return (
      <View style={[styles.box, this.props.style]}>
        <View style={styles.headerContainer}>
          <View style={styles.ownerContainer}>
            <Image
              style={styles.ownerImage}
              source={{ uri: repository.owner.avatar_url }}
            />
            <View style={styles.ownerInformationContainer}>
              <Text style={styles.ownerTitle}>CRIADOR</Text>
              <Text style={styles.ownerText}>{repository.owner.login}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.linkContainer}
            activeOpacity={0.6}
            onPress={() => Linking.openURL(repository.html_url)}
          >
            <Text style={styles.linkText}>Acessar</Text>
            <Icon name="angle-right" size={14} style={styles.linkIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.repositoryContent}>
          <Text style={styles.repositoryTitle}>{repository.full_name}</Text>
          <Text style={styles.repositoryDescription}>
            {repository.description}
          </Text>

          <View style={styles.repositoryInformationContainer}>
            <View style={styles.infoContainer}>
              <Icon name="star" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>{repository.stargazers_count}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Icon name="code-fork" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>{repository.forks_count}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Icon name="eye" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>{repository.watchers_count}</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            color="danger"
            onPress={() => this.props.removeFavorite(repository.id)}
          >
            Remover
          </Button>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeFavorite }, dispatch);

export default connect(null, mapDispatchToProps)(Repository);
