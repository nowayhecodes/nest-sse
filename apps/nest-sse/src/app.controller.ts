import { Controller, Get, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, interval, map } from 'rxjs';
import { OnQueueActive, Processor } from '@nestjs/bull';
import { Job } from 'bull';

interface MessageEvent {
  data: string | object;
}

@Controller('api')
@Processor('new-panda-arrived')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('panda-event')
  @OnQueueActive()
  sendEvent(job: Job): Observable<MessageEvent> {
    console.log(job);

    return interval(1000).pipe(
      map(() => ({
        id: job.id,
        name: job.name,
        data: job.data,
      })),
    );
  }
}
