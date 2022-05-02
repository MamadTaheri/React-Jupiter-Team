import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/react';

const CardPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setDate] = useState();
  /**
   * some style for loading icon
   *
   */
  const override = css`
    display: block;
    margin: 20% auto;
    padding-left: 45%;
  `;

  const handleClick = (e) => {};

  /**
   * in useEffect by axios we get data from api service and
   * we store the mapped data in state
   */
  useEffect(() => {
    axios
      .get('')
      .then((response) => {
        console.log(response);
        const ourData = response.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              text={card.text}
              isActive={card.isActive}
              onPress={handleClick}
            />
          );
        });
        setDate(ourData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <BeatLoader color="gray" loading={loading} size={25} css={override} />
    );
  } else {
    return <div className="card-deck">{data}</div>;
  }
};
export default CardPage;
