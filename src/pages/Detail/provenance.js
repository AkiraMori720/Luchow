import React from 'react';
import * as S from './styles';

const Provenance = React.memo(({name, time}) => (
 <S.ProvenanceContainer>
     <S.ProvenanceContent>
         <S.ProvenanceName><span>Listed by</span> @{name}</S.ProvenanceName>
         <S.ProvenanceTime>{time}</S.ProvenanceTime>
     </S.ProvenanceContent>
 </S.ProvenanceContainer>
));




export default Provenance;
