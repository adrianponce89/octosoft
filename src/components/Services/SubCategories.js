import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TitleComponent from './title';
import CardSubCategories from './CardSubCategories';

const SubCategories = ({
  design,
  media,
  marketing,
  operations,
  dataScience,
  solutions,
  web3,
  search,
  software,
}) => {
  const [selected, setSelected] = useState([]);
  const [title, setTitle] = useState('');
  const [paletteColor, setPaletteColor] = useState('');
  const [widthEdited, setWidthEdited] = useState('');
  const [lengthEdited, setLengthEdited] = useState(false);
  const classes = useStyles({ widthEdited });

  useEffect(() => {
    const selection = () => {
      switch (search) {
        case 'Design':
          setSelected(design);
          setTitle('Design');
          setPaletteColor(design[0].node.color);
          setWidthEdited('90%');
          design.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          break;
        case 'Media':
          setSelected(media);
          setTitle('Social Media');
          setPaletteColor(media[0].node.color);
          setWidthEdited('90%');
          media.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          break;
        case 'Marketing':
          setSelected(marketing);
          setTitle('Marketing');
          setPaletteColor(marketing[0].node.color);
          setWidthEdited('90%');
          marketing.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          break;
        case 'Operations':
          setSelected(operations);
          setTitle('Operations');
          setPaletteColor(operations[0].node.color);
          setWidthEdited('70%');
          operations.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          break;
        case 'Data':
          setSelected(dataScience);
          setTitle('Data Science');
          setPaletteColor(dataScience[0].node.color);
          setWidthEdited('70%');
          dataScience.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          break;
        case 'IT':
          setSelected(solutions);
          setTitle('IT Solutions');
          setPaletteColor(solutions[0].node.color);
          setWidthEdited('90%');
          solutions.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          break;
        case 'Web':
          setSelected(web3);
          setTitle('Web 3');
          setPaletteColor(web3[0].node.color);
          setWidthEdited('90%');
          web3.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          break;
        case 'Software':
          setSelected(software);
          setTitle('Software Engineer');
          setPaletteColor(software[0].node.color);
          setWidthEdited('90%');
          software.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          break;
        default:
      }
    };
    selection();
  }, [search]);
  return (
    <div className={classes.root}>
      <TitleComponent title={title} color={paletteColor} />
      <div className={classes.cardContainer}>
        {selected &&
          selected.map((categories, index) => (
            <CardSubCategories
              color={paletteColor}
              key={index}
              description={categories.node.description}
              title={categories.node.title}
              octagon={`url(${categories.node.octagon.file.url})`}
              icon={`url(${categories.node.icon.file.url})`}
              length={lengthEdited}
            />
          ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    paddingTop: '10rem',
    height: 'fit-content',
    flexDirection: 'column',
    backgroundColor: '#F5F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 800px)': {
      paddingTop: '8rem',
    },
  },

  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: '10rem',
    width: ({ widthEdited }) => widthEdited || '100%',
    height: 'fit-content',
    '@media (max-width: 1024px)': {
      width: '100%',
      flexWrap: 'nowrap',
      flexDirection: 'column',
    },
  },
}));

export default SubCategories;
