import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const getCarRecommendation = async (query: string): Promise<string>  => {
  if (!apiKey) {
    return "API Key가 설정되지 않았습니다. 관리자에게 문의하세요.";
  }

  try {
    const model = 'gemini-2.5-flash';
    // Updated system instruction for the Junkyard context
    const systemInstruction = `당신은 '(주)한국종합폐차장'의 전문 AI 상담원입니다. 
    사용자의 질문에 대해 폐차 절차, 필요 서류, 조기 폐차 지원금, 폐차 견적(대략적인 안내) 등에 대해 친절하고 전문적으로 답변해야 합니다.

    업체 정보:
    - 상호: (주)한국종합폐차장
    - 대표자: 유용기
    - 사업자등록번호: 514-81-80365
    - 위치: 대구 달성군 하빈면 하산리 947-95
    - 대표 전화: 080-666-9000, 053-566-8888
    - 개인정보관리책임자: 유충기
    - 특징: 정부 관허 폐차장, 대구/경북 지역 전문(전국 가능), 무료 견인, 당일 말소.

    핵심 가이드라인:
    1. 톤앤매너: 신뢰감 있고, 친절하며, 전문적인 한국어 사용.
    2. 업체 강점 강조: 관허 폐차장(안전성), 빠른 일처리(당일 말소), 무료 견인 서비스.
    3. 일반적인 절차: '접수 -> 무료 견인 -> 입고 및 검수 -> 고철비 지급 -> 말소 등록' 과정을 쉽게 설명.
    4. 필요 서류 안내: 
       - 개인: 자동차등록증 원본, 신분증 사본.
       - 법인: 사업자등록증, 법인인감증명서, 등기부등본, 자동차등록증.
    5. 답변 길이는 200자 내외로 간결하게, 가독성 좋게 줄바꿈 활용.
    6. 구체적인 견적 질문: "차량의 연식, 휠 유무, 엔진 상태에 따라 보상금이 달라집니다. 080-666-9000 으로 전화 주시면 담당자가 정확한 금액을 즉시 안내해 드립니다."라고 유도.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 현재 상담 양이 많아 답변을 생성하지 못했습니다. 잠시 후 다시 시도해주세요.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "시스템 오류가 발생했습니다. 잠시 후 다시 질문해주세요.";
  }
};