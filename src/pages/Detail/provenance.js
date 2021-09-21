import React from 'react';
import * as S from './styles';

const Provenance = React.memo(({name, time, onOpen}) => (
 <S.ProvenanceContainer>
     <S.ProvenanceContent>
         <S.ProvenanceName onClick={onOpen}><span>Listed by</span> @{name}</S.ProvenanceName>
         <S.ProvenanceTime>{time}</S.ProvenanceTime>
     </S.ProvenanceContent>
 </S.ProvenanceContainer>
));




export default Provenance;
