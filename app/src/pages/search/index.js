import React from 'react'
import { connect } from 'react-redux'
import {
  map,
  filter,
  compose,
  contains,
  toLower,
  split,
  isNil,
  isEmpty,
  not
} from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { CHANGE_SEARCH_CRITERIA } from '../../constants'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'inlineBlock',
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    padding: 0
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  pageMargin: { marginTop: '56px' }
})

const Search = props => {
  const searchResults = not(
    isNil(props.searchCriteria) || isEmpty(props.searchCriteria)
  )
    ? compose(
        map(r => <ResourceListItem resource={r} />),
        filter(r =>
          contains(toLower(props.searchCriteria), split(' ', toLower(r.name)))
        )
      )(props.resources)
    : null

  const { classes } = props
  return (
    <div>
      <MenuAppBar title="Search" />
      <div style={{ marginTop: '56px' }}>
        <form>
          <TextField
            id="search"
            label="Search Resources"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={props.onSearchChange}
            value={props.searchCriteria}
          />
        </form>
        <List>{searchResults}</List>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resources: state.resources,
    searchCriteria: state.searchCriteria
  }
}

const mapActionsToProps = dispatch => {
  return {
<<<<<<< HEAD
    getResource: id => dispatch(getResource(id)),
    toggleConfirmDelete: () => dispatch({ type: CONFIRM_DELETE_RESOURCE }),
    deleteResource: (id, history) => dispatch(deleteResource(id, history))
=======
    onSearchChange: e =>
      dispatch({ type: CHANGE_SEARCH_CRITERIA, payload: e.target.value })
>>>>>>> 71f25666e5834ad34d46a7ff067394a49b8f23e7
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default withDrawer(connector(withStyles(styles)(Search)))

/*
//not(isNil(props.searchCriteria) || isEmpty(props.searchCriteria))
compose(
map(r => <ResourceListItem resource={r} />),
filter(r =>
  any(toLower(props.searchCriteria), split(' ', toLower(r.name)))
)
)(props.resources)


 <form  noValidate autoComplete="off">
<TextField
          id="search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
 </form>

 <Link to="/resources/new">
   <Button
     className={classes.button}
     variant="fab"
     color="primary"
     aria-label="add"
   >
     <AddIcon />
   </Button>
 </Link>




*/
