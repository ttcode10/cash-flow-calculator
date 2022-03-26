import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from '@firebase/firestore';
import styled from 'styled-components';

import { db } from '../firebase-config';
import { Background, Button, Card, FormControl, H2Text, H6Text, Input } from '../shared/components';
import { colors, spacing } from '../shared/themes';

const Slogan = styled.div`
  margin-bottom: ${spacing.spacing8x};
`;

interface SheetProps {
  sellingPrice?: number;
  weeklyRent?: number;
}

interface ResultProps {
  sellingPrice?: number;
  weeklyRent?: number;
}

export const Homepage = () => {
  const [sheet, setSheet] = useState<SheetProps>();
  const sheetsCollectionRef = collection(db, 'sheets');
  const [result, setResult] = useState<ResultProps>();
  const [sheetId, setSheetId] = useState('');
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

  const onInputChange = (e) => {
    const newValue = {
      ...sheet,
      [e.target.name]: e.target.value,
    };
    setSheet(newValue);
  };

  const generateNewCaseId = () => {
    const id = Math.floor(new Date().valueOf() * Math.random())
      .toString(36)
      .toUpperCase();
    setSheetId(id);
  };

  const getResult = async () => {
    const data = await getDocs(sheetsCollectionRef);
    return data.docs.find((item) => item.id === sheetId)?.data();
  };

  const addSheet = async () => {
    setIsSubmitButtonDisabled(true);
    await setDoc(doc(sheetsCollectionRef, sheetId), sheet);
    const calculationResult = await getResult();
    if (calculationResult) {
      setResult(calculationResult);
      setIsSubmitButtonDisabled(false);
    }
  };

  useEffect(() => {
    generateNewCaseId();
  }, []);

  return (
    <Background>
      <Slogan>
        <H2Text color={colors.white}>A good property can sustain itself.</H2Text>
      </Slogan>
      <Card>
        <FormControl label="Selling Price">
          <Input startEnhancer="$" onChange={onInputChange} name="sellingPrice" />
        </FormControl>
        <FormControl label="Weekly Rent">
          <Input startEnhancer="$" onChange={onInputChange} name="weeklyRent" />
        </FormControl>
        <Button
          onClick={addSheet}
          isLoading={isSubmitButtonDisabled}
          disabled={isSubmitButtonDisabled}
        >
          Submit
        </Button>
        <H6Text>Selling Price: {result?.sellingPrice}</H6Text>
        <H6Text>Weekly Rent: {result?.weeklyRent}</H6Text>
      </Card>
    </Background>
  );
};
