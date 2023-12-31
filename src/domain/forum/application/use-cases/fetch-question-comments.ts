import { type QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { type QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionCommentsUseCaseResponse {
  questionComments: QuestionComment[]
}

export class FetchQuestionCommentsUseCase {
  constructor (private readonly questionCommentsRepository: QuestionCommentsRepository) {}

  async execute ({
    questionId,
    page
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    const questionComments = await this.questionCommentsRepository.findManyByQuestionId(questionId, {
      page
    })

    return {
      questionComments
    }
  }
}
