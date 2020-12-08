import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from '@reach/router';
import { sortPlans } from '../../utils';
import { Grid, Typography, Dialog } from '@material-ui/core';
import PlanTypeButton from './PlanTypeButton';
import PlanButton from './PlanButton';
import PlanModal from './PlanModal';

const styles = makeStyles((theme) => ({
  root: {
    background: '#ccc',
    padding: 26,
    alignSelf: 'stretch',
  },
  container: {
    background: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
  },
  rowContainer: {
    padding: 5,
  },
}));

const PlansGrid = ({ plans }) => {
  const classes = styles();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sortedPlans = sortPlans(plans);

  const handleClick = (p) => {
    console.log('setting plan');
    setSelectedPlan(p);
  };

  const handleClose = () => {
    setSelectedPlan(null);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        {sortedPlans.map((category) => (
          <Grid item xs={6} md={3} className={classes.rowContainer}>
            <PlanTypeButton category={category} />
            {category.plans.map((plan) => (
              <PlanButton
                plan={plan.node}
                color={category.color}
                onClick={() => {
                  setSelectedPlan(plan);
                  setSelectedColor(category.color);
                }}
              />
            ))}
          </Grid>
        ))}
      </Grid>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={selectedPlan !== null}
        maxWidth="lg"
      >
        {!!selectedPlan ? (
          <PlanModal
            description={selectedPlan.node.description}
            amount={selectedPlan.node.amount}
            type={selectedPlan.node.type}
            title={selectedPlan.node.title}
            color={selectedColor}
            onClose={handleClose}
          />
        ) : (
          ''
        )}
      </Dialog>
    </div>
  );
};

export default PlansGrid;
