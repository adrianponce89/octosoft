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
  const [changeTitles, setChangeTitles] = useState(false);
  const [filter, setFilter] = useState('');
  const classes = useStyles({ widthEdited });

  console.log('design', design);
  useEffect(() => {
    const selection = async() => {
      switch (search) {
        case 'design':
          setSelected(design);
          setTitle('Design');
          setPaletteColor(design[0]?.node?.color);
          setWidthEdited('80%');
          design.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          setFilter(
            `drop-shadow(0px 4px 4px rgba(125, 219, 196, 0.4))`,
          );
          break;
        case 'media':
          setSelected(media);
          setTitle('Social Media');
          setPaletteColor(media[0].node.color);
          setWidthEdited('80%');
          media.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          setFilter(
            `drop-shadow(0px 4px 4px rgba(125, 219, 196, 0.4))`,
          );
          break;
        case 'marketing':
          setSelected(marketing);
          setTitle('Marketing');
          setPaletteColor(marketing[0].node.color);
          setWidthEdited('80%');
          marketing.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          setFilter(
            `drop-shadow(0px 4px 4px rgba(162, 132, 223, 1))`,
          );
          break;
        case 'operations':
          setSelected(operations);
          setTitle('Operations');
          setPaletteColor(operations[0].node.color);
          setWidthEdited('80%');
          operations.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          setChangeTitles(true);
          setFilter(
            `drop-shadow(0px 4px 4px rgba(162, 132, 223, 1))`,
          );
          break;
        case 'data':
          setSelected(dataScience);
          setTitle('Data Science');
          setPaletteColor(dataScience[0].node.color);
          setWidthEdited('80%');
          dataScience.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          setChangeTitles(true);
          setFilter(
            `drop-shadow(0px 4px 4px rgba(219, 125, 196, 0.4))`,
          );
          break;
        case 'it':
          setSelected(solutions);
          setTitle('IT Solutions');
          setPaletteColor(solutions[0].node.color);
          setWidthEdited('80%');
          solutions.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          setFilter(
            `drop-shadow(0px 4px 4px rgba(219, 125, 196, 0.4))`,
          );
          break;
        case 'web':
          setSelected(web3);
          setTitle('Web 3');
          setPaletteColor(web3[0].node.color);
          setWidthEdited('80%');
          web3.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          setFilter(
            `drop-shadow(0px 4px 4px rgba(255, 159, 59, 0.4))`,
          );
          break;
        case 'software':
          setSelected(software);
          setTitle('Software Engineer');
          setPaletteColor(software[0].node.color);
          setWidthEdited('80%');
          software.length % 5 === 0
            ? setLengthEdited(true)
            : setLengthEdited(false);
          setChangeTitles(true);
          setFilter(
            `drop-shadow(0px 4px 4px rgba(255, 159, 59, 0.4))`,
          );
          
          break;
        default:
      }
    
    };
/*     const sort = async() => {
      let sorted = selected;
      console.log(sorted);
      sorted = await sorted.sort(function (a, b) {
        return a.Id - b.Id;
      });
      setSelected(sorted);
    }; */
    selection();
/*     sort();
 */  }, [search]);
  return (
    <div className={classes.root}>
      <TitleComponent title={title} color={paletteColor} />
      <div className={classes.cardContainer}>
        {selected &&
          selected.sort((a, b) => a.node.order - b.node.order).map((categories, index) => (
            <CardSubCategories
              color={paletteColor}
              key={index}
              description={categories.node.description}
              title={categories.node.title}
              icon={`url(${categories.node.icon.file.url})`}
              length={lengthEdited}
              titleChanged={changeTitles}
              octagon={categories.node.octagon.file.url}
              filter={filter}
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
    paddingBottom: '7rem',
    width: ({ widthEdited }) => widthEdited || '100%',
    height: 'fit-content',
    '@media (max-width: 800px)': {
      width: '100%',
      flexWrap: 'nowrap',
      flexDirection: 'column',
    },
  },
}));

export default SubCategories;
