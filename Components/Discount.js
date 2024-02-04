import React, { useState, useEffect } from 'react';
import Card from './cards';
import Title from './Title';
import Subtitle from './SubTitles';

const Discount = () => {
  const [discountData, setDiscountData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount&type=SINGLE&viewType=TILE');
        const data = await response.json();
        // Filter the data where type is "SINGLE" and viewType is "TILE"
        const filteredData = data.items.filter(item => item.type === 'SINGLE' && item.viewType === 'TILE');
        setDiscountData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 
  return (
    <div className="w-2/3">
      {discountData && discountData.map((item) => (
        <div key={item.id} className="flex gap-12 mb-4">
          <div className="w-1/4">
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </div>
          <div className="gap-5 flex  justify-between">
            {item.items.slice(0, 4).map((product) => (
              <Card
                key={product.uuid}
                imageUrl={product.publication.media[0].uri}
                productName={product.publication.title}
                brandName={product.publication.brandName}
                discountRate={product.publication.priceInfo.discountRate}
                price={product.publication.priceInfo.price}
                rating={product.publication.rating}
                tagsOnDesc={product.publication.tagsOnDesc}
                prefaceIconUrl={product.publication.prefaceIconUrl}
                tagsOnImage={product.publication.tagsOnImage}
                preface={product.publication.preface}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  
  );
};

export default Discount;
